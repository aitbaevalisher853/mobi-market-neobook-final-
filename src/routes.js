import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Favorite from "./pages/Favorite"
import Shop from "./pages/Shop"
import routes from "./utils/consts"


export const authRoutes = [
  {
    path: routes.ADMIN,
    Component: <Admin />
  },
  {
    path: routes.FAVORITE,
    Component: <Favorite />
  }
]

export const publicRoutes = [
  {
    path: routes.SHOP,
    Component: <Shop />
  },
  {
    path: routes.LOGIN,
    Component: <Auth/>
  },
  {
    path: routes.REGISTRATION,
    Component: <Auth />
  }
]
