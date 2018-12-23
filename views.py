#coding:utf-8
from django import template
from django.views.generic import TemplateView
from oscar.core.loading import get_class, get_model
from oscar.core.compat import assignment_tag
from django.utils.translation import ugettext_lazy as _
from oscar.apps.catalogue.views import CatalogueView, ProductCategoryView

from django.views import generic
from django.http import JsonResponse

Category = get_model('catalogue', 'category')
CategoryProduct = get_model('catalogue', 'product')
Product = get_model('catalogue', 'Product')
StockRecord = get_model('partner', 'StockRecord')
ProductImage = get_model('catalogue', 'ProductImage')

get_product_search_handler_class = get_class(
    'catalogue.search_handlers', 'get_product_search_handler_class')

class CatalogueView(CatalogueView):

    @property
    def template_name(self):
        if self.request.is_mobile:
            return 'catalogue/m_browse.html'
        return  'catalogue/browse.html'

class ProductCategoryView(ProductCategoryView):
    template_name = 'catalogue/category.html'

class CatalogueView(CatalogueView):

    def get_search_handler(self, *args, **kwargs):
        return get_product_search_handler_class()(*args, **kwargs)

class CatalogueMapView(TemplateView):
    template_name = 'catalogue/map.html'

    def post(self, request):
        category_list = []
        current_category = {
            'id':'',
            'wap_banner_url':'',
            'front_name':'',
            'name':'',
        }
        sub_category_list = []
        cats = Category.objects.all()
        parent = None
        for cat in cats:
            item = {}
            if cat.depth == 1:
                parent = cat
                item['id'] = cat.id
                item['name'] = cat.name
                category_list.append(item)
            elif cat.depth == 2:
                cat.parent = parent.slug
                item['wap_banner_url'] = cat.image.url
                item['name'] = cat.name
                sub_category_list.append(item)
        data = {}
        current_category['subCategoryList'] = sub_category_list
        data['categoryList'] = category_list
        data['currentCategory'] = current_category

    def get(self, request, *args, **kw):
        return super(CatalogueMapView, self).get(request, *args, **kw)

    def get_context_data(self, **kwargs):
        context = super(CatalogueMapView, self).get_context_data(**kwargs)
        cats = Category.objects.all()
        parent = None
        for cat in cats:
            if cat.depth == 1:
                parent = cat
            elif cat.depth == 2:
                cat.parent = parent.slug
        context['categories'] = cats
        return context

    def render_to_response(self, context, **response_kwargs):
        print context, response_kwargs
        from django.http import JsonResponse
        return JsonResponse({'data':1})

get_presale_product_search_handler_class = get_class(
    'catalogue.search_handlers', 'get_presale_product_search_handler_class')
class PresaleCatalogueView(CatalogueView):
    def get_search_handler(self, *args, **kwargs):
        return get_presale_product_search_handler_class()(*args, **kwargs)

def wx_mini_indexpage(request):
    channel = []
    banner = []
    topicList = []
    cats = Category.objects.all()

    for cat in cats:
        item = {}
        item_top = {}
        if cat.depth == 1:
            # else:
            item['icon_url'] = '#'
            item['id'] = cat.id
            item['name'] = cat.name
            item['url'] = cat.slug

            # item['icon_url'] = cat.image
            # channel.append(item)
        elif cat.depth == 2:
            item['id'] = cat.id
            item['link'] = cat.slug
            # item['image_url'] = cat.image.url
            item['image_url'] = 'http://10.0.2.2:8000' +'/..'+ cat.image.url
            item['parent_id'] = cat.get_parent().id
            banner.append(item)
            item_top['parent_id'] = cat.get_parent().id
            item_top['id'] = cat.id
            item_top['title'] = cat.name
            item_top['scene_pic_url'] = 'http://10.0.2.2:8000' +'/..'+ cat.image.url
            item_top['price_info'] = ''
            item_top['subtitle'] = cat.description
            item_top['name'] = cat.name
            item_top['url'] = cat.slug
            item_top['icon_url'] = 'http://10.0.2.2:8000' +'/..'+ cat.image.url
            topicList.append(item_top)
            channel.append(item_top)
    data = {}
    data['channel'] = channel
    data['banner'] = banner
    data['topicList'] = topicList

    floorgoods = []
    f_goods = wx_indexpage_goods(request)
    floorgoods.append(f_goods)
    data['categoryList'] = floorgoods
    return JsonResponse({'data': data, 'errno':0})

def wx_indexpage_goods(request):
    # latest_question_list = Product.objects.all()
    # paginator = Paginator(latest_question_list, 3)#每两个为一页
    # page = request.GET.get('page')
    # try:
    #     latest_question_list = paginator.page(page)
    # except PageNotAnInteger:
    #     # If page is not an integer, deliver first page.
    #     latest_question_list = paginator.page(1)
    # except EmptyPage:
    #     # If page is out of range (e.g. 9999), deliver last page of results.
    #     latest_question_list = paginator.page(paginator.num_pages)
    #
    # context = {'latest_question_list': latest_question_list}
    qs = Product.objects.filter(status='onsale')
    print qs
    goods_dict = {}
    goods_list = []
    for g in qs:
        item = {}
        item['id'] = g.id
        item['name'] = g.title
        item['retail_price'] = StockRecord.objects.get(\
            product_id=g.id).price_retail
        if g.images:
            print 1111, g.images
            # item['list_pic_url'] = g.images
            item['list_pic_url'] = 'http://10.0.2.2:8000'\
                +'/..'+ ProductImage.objects.get(product_id=g.id).original.url
        else:
            item['list_pic_url'] = '#'
        goods_list.append(item)
    goods_dict['goodsList'] = goods_list
    return goods_dict

def topiclist_mini_view(request):
    topicList = []
    cats = Category.objects.all()
    for cat in cats:
        item_toplist = {}
        if cat.depth == 2:
            item_top['id'] = cat.id
            item_top['title'] = cat.name
            item_top['scene_pic_url'] = 'http://10.0.2.2:8000' +'/..'+ cat.image.url
            item_top['price_info'] = ''
            item_top['subtitle'] = cat.description
            topicList.append(item_top)
    data = {}
    data['topicList'] = topicList
    return JsonResponse({'data': data})

def wx_mini_product_view(request):
    products_list = []
    # print request.get('id')
    data = {}
    # context = super(ProductCategoryView, self).get_context_data(**kwargs)
    products = Product.object.get()
    return JsonResponse({'data':data})

def mini_goods_sort_view(request):
    category_id = request.GET.get('id')
    qs = Category.objects.all().get(id=category_id)
    current_category = {}
    sub_category_list = []
    parent_slug = qs.slug
    for qs_sort in qs.get_children().all():
        item = {}
        item['id'] = qs_sort.id
        item['name'] = qs_sort.name
        item['slug'] = qs_sort.slug
        item['wap_banner_url'] = qs_sort.image.url
        item['category_slug'] = ''.join([parent_slug, '/', item['slug']])
        item['parent_id'] = category_id
        sub_category_list.append(item)
    data = {}
    current_category['subCategoryList'] = sub_category_list
    data['currentCategory'] = current_category
    return JsonResponse({'data':data})

def mini_sort_product_view(request):
    data = {}
    category_id = request.GET.get('id')
    parent_id = request.GET.get('parent_id')
    if parent_id:
        parent_qs = Category.objects.get(id = parent_id)
        parent_qs = parent_qs.get_children()
        print parent_qs
        # 组装json
        brother_category_list = []
        for good_sort in parent_qs:
            item_nav = {}
            item_nav['name'] = good_sort.name
            item_nav['id'] = good_sort.id
            brother_category_list.append(item_nav)

        data['brotherCategory'] = brother_category_list

    # 组装json
    sub_category_list = []
    current_category = {}
    qs = Category.objects.get(id = category_id)
    current_category['name'] = qs.name
    current_category['front_name'] = ''
    temp_qs =[]
    temp_qs.append(qs)
    qs_products = Product.browsable.base_queryset()
    if qs:
        qs_products = qs_products.filter(categories__in=temp_qs).distinct()

    for qs_product in qs_products:
        item_p = {}
        print 66, qs_product
        item_p['name'] = qs_product.title
        item_p['front_name'] = ''

        sub_category_list.append(item_p)
    current_category['subCategoryList'] = sub_category_list

    data['currentCategory'] = current_category



    return JsonResponse({'data': data, 'errno':0})

def mini_goods_list_view(request):
    goods_id = request.GET.get('categoryId')
    page = request.GET.get('page')
    size = request.GET.get('size')
    print goods_id, page, size
    data = {}
    # 组装json
    sub_category_list = []
    qs = Category.objects.get(id = goods_id)
    temp_qs =[]
    temp_qs.append(qs)
    qs_products = Product.browsable.base_queryset()
    if qs:
        qs_products = qs_products.filter(categories__in=temp_qs).distinct()

    for qs_product in qs_products:
        item_p = {}
        print 66, qs_product
        print dir(qs_product)
        item_p['name'] = qs_product.title
        item_p['retail_price'] = StockRecord.objects.get(\
            product_id=qs_product.id).price_retail
        # item_p['list_pic_url'] = ProductImage.objects.get(\
        #     product_id=qs_product.id).original
        # item_p['list_pic_url'] = qs_product.primary_image()
        item_p['list_pic_url'] = 'http://10.0.2.2:8000'\
            +'/..'+ ProductImage.objects.get(product_id=qs_product.id).original.url

        sub_category_list.append(item_p)
    data['goodsList'] = sub_category_list
    return JsonResponse({'data': data})

class WxProductCategoryView(ProductCategoryView):
    template_name = 'catalogue/category.html'
    context_object_name = "products"
    enforce_paths = False

    def get_context_data(self, **kwargs):
        print 999, kwargs
        context = super(ProductCategoryView, self).get_context_data(**kwargs)
        context['category'] = self.category
        search_context = self.search_handler.get_search_context_data(
            self.context_object_name)
        context.update(search_context)
        # print context
        print context
        current_category = []
        print 3333, context['category']
        if not context['category'].get_children().all():
            query_data = context['category']
            item = {}
            item['id'] = query_data.id
            item['name'] = query_data.name
            item['slug'] = query_data.slug
            item['image'] = query_data.image.url
            current_category.append(item)
        else:
            query_data = context['category'].get_children()
            for qs_l in context['category'].get_children().all():
                item = {}
                item['id'] = qs_l.id
                item['name'] = qs_l.name
                item['slug'] = qs_l.slug
                item['image'] = qs_l.image.url
                current_category.append(item)
        data = {}
        data['currentCategory'] = current_category
        print data
        return context
        # return context
