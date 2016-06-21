Rails.application.routes.draw do
  root to: "static_pages#home", as: "home"

  get 'test', to: 'static_pages#test', as: 'test'
end
