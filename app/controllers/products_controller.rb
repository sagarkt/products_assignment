class ProductsController < ApplicationController
  def filter
    products = Product.where(filter_params[:searchType] => /#{filter_params[:searchText]}/i)
    total_products = products.count
    products = products.paginate(page: filter_params[:pageNo].to_i,
                                 per_page: filter_params[:pageLimit].to_i)
    render json: {
      totalProducts: total_products,
      products: products.as_json
    }
  end

  def show
    product = Product.find(params[:id])
    render json: product.as_json
  end

  private

  def filter_params
    filter_keys = [:pageNo, :pageLimit, :searchText, :searchType]
    params.permit(filter_keys)
  end
end
