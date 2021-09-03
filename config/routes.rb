Rails.application.routes.draw do
  # Kad linkai būtų normalūs, ir žinotum kaip vyksta.
  get 'search', to: "search#index"
  get 'button', to: "button#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
