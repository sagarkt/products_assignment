Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'products#index'

  devise_for :users, skip: %i[registration session password], controllers: { confirmations: 'confirmations', sessions: 'sessions', registrations: 'registrations' }
  as :user do
    post '/users/signin', to: 'sessions#create', as: :user_session
    get '/users/get_current_user'
    delete '/users/signout', to: 'sessions#destroy', as: :destroy_user_session

    resources :products, only: %i[show] do
      collection do
        get :filter
      end
    end
  end
end
