Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    namespace :v1 do
      resources :sessions, only: [] do
        member do
          get 'replies'
        end
        resources :messages, param: :identifier, only: %i[create show]
      end
    end
  end
end
