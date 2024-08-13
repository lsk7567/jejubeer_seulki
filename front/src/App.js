import "./css/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import AboutUs from "./pages/pages_hoon/AboutUs";
import Home from "./pages/Home";
import Join from "./pages/pages_hoon/Join";
import ProductDetail from "./pages/pages_ryu/ProductDetail";
import ProductList from "./pages/pages_ryu/ProductList";
import BulkPurchace from "./pages/pages_ryu/BulkPurchace.jsx";
import Administration from "./pages/pages_ryu/Administration.jsx";
import NewsWrite from "./pages/pages_ryu/NewsWrite.jsx";
import NewsModify from "./pages/pages_ryu/NewsModify.jsx";
import NewsDelete from "./pages/pages_ryu/NewsDelete.jsx";
import BreweryIntro from "./pages/pages_seulki/BreweryIntro.jsx";
import News from "./pages/pages_mimi/news/News";
import NewsDetail from "./pages/pages_mimi/news/NewsDetail";
import Clubnouveau from "./pages/pages_mimi/clubnouveau/Clubnouveau";
import ClubnouveauDetail from "./pages/pages_mimi/clubnouveau/ClubnouveauDetail";
import PrivacyPolicy from "./pages/pages_mimi/policy/PrivacyPolicy";
import VideoPolicy from "./pages/pages_mimi/policy/VideoPolicy";
import TermsPage from "./components/components_mimi/terms/TermsPage.jsx";
import OurbeersPage from "./components/components_mimi/ourbeers/OurbeersPage.jsx";
import MyPage from "./pages/pages_hidori/MyPage";
import BrewerySpace from "./pages/pages_seulki/BrewerySpace.jsx";
import BreweryTourMain from "./pages/pages_seulki/BreweryTourMain.jsx";
import Login from "./pages/pages_hoon/Login.jsx";
import BreweryKitchen from "./pages/pages_seulki/BreweryKitchen.jsx";
import BreweryVisit from "./pages/pages_seulki/BreweryVisit.jsx";
import Contact from "./pages/pages_seulki/Contact.jsx";
import OemOdm from "./pages/pages_seulki/OemOdm.jsx";
import Cart from "./pages/pages_hidori/Cart.jsx";
import BreweryGroup from "./pages/pages_seulki/BreweryGroup.jsx";
import BreweryGroupForm from "./pages/pages_seulki/BreweryGroupForm.jsx";
import Payment from "./pages/pages_hidori/Payment.jsx";
import BreweryTour1 from "./pages/pages_seulki/BreweryTour1.jsx";
import BreweryTour2 from "./pages/pages_seulki/BreweryTour2.jsx";
import BreweryTourCheck1 from "./pages/pages_seulki/BreweryTourCheck1.jsx";
import BreweryTourCheck2 from "./pages/pages_seulki/BreweryTourCheck2.jsx";
import BreweryTourTicket from "./pages/pages_seulki/BreweryTourTicket.jsx";
import BreweryTourTicket2 from "./pages/pages_seulki/BreweryTourTicket2.jsx";
import BreweryTourTicket3 from "./pages/pages_seulki/BreweryTourTicket3.jsx";

import { useState } from "react";
import BreweryGlassTicket from "./pages/pages_seulki/BreweryGlassTicket.jsx";
import BreweryGlassTicket2 from "./pages/pages_seulki/BreweryGlassTicket2.jsx";
import BreweryGlassTicket3 from "./pages/pages_seulki/BreweryGlassTicket3.jsx";
import OrderComplete from "./pages/pages_hidori/OrderComplete.jsx";
import KakaoStart from "./pages/pages_hoon/KakaoStart.jsx";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const removeCartCount = (qty) => {
    setCartCount(cartCount - qty);
  };

  const handleDeleteItem = (cid, qty) => {
    const deleteIndex = cartItems.findIndex((item) => item.cid === cid);
    const updateCartList = cartItems.filter((item, i) => i !== deleteIndex);
    setCartItems(updateCartList);
    removeCartCount(cartCount - qty);
  };

  const addCartCount = (result) => {
    if (result === 1) setCartCount(cartCount + 1);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />, // layout 정의!!
      //loader: rootLoader,
      children: [
        { path: "/", element: <Home /> },

        // 다훈 path 설정
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/join", element: <Join /> },
        { path: "/login", element: <Login /> },
        { path: "/kakao", element: <KakaoStart /> },

        // 지은 path 설정
        { path: "/product", element: <ProductList /> },
        { path: "/product/:pid", element: <ProductDetail /> },
        { path: "/bulkPurchace", element: <BulkPurchace /> },
        { path: "/admin", element: <Administration /> },
        { path: "/news", element: <News /> },
        { path: "/news/:nid/:rno", element: <NewsDetail /> },
        { path: "/news/write", element: <NewsWrite /> },
        { path: "/news/modify/:nid/:rno", element: <NewsModify /> },
        { path: "/news/delete/:nid/:rno", element: <NewsDelete /> },

        // 슬기 path 설정
        { path: "/brewery/intro", element: <BreweryIntro /> },
        { path: "/brewery/space", element: <BrewerySpace /> },
        { path: "/brewery/tour/main", element: <BreweryTourMain /> },
        { path: "/brewery/kitchen", element: <BreweryKitchen /> },
        { path: "/brewery/visit", element: <BreweryVisit /> },
        { path: "/contact", element: <Contact /> },
        { path: "/oemodm", element: <OemOdm /> },
        { path: "/brewery/group", element: <BreweryGroup /> },
        { path: "/brewery/group-form", element: <BreweryGroupForm /> },
        { path: "/brewery/tour/one", element: <BreweryTour1 /> },
        { path: "/brewery/tour/two", element: <BreweryTour2 /> },
        { path: "/brewery/tour/ticketing", element: <BreweryTourTicket /> },
        { path: "/brewery/tour/ticketing2", element: <BreweryTourTicket2 /> },
        { path: "/brewery/tour/ticketing3", element: <BreweryTourTicket3 /> },
        { path: "/brewery/glass/ticketing", element: <BreweryGlassTicket /> },
        { path: "/brewery/glass/ticketing2", element: <BreweryGlassTicket2 /> },
        { path: "/brewery/glass/ticketing3", element: <BreweryGlassTicket3 /> },

        {
          path: "/brewery/tour/ticketing/check1",
          element: <BreweryTourCheck1 />,
        },
        {
          path: "/brewery/tour/ticketing/check2",
          element: <BreweryTourCheck2 />,
        },

        // 찬미 path 설정
        { path: "/ourbeers", element: <OurbeersPage /> },
        { path: "/clubnouveau", element: <Clubnouveau /> },
        { path: "/clubnouveau/:cid", element: <ClubnouveauDetail /> },
        { path: "/terms", element: <TermsPage /> },
        { path: "/privacypolicy", element: <PrivacyPolicy /> },
        { path: "/videopolicy", element: <VideoPolicy /> },

        // 희진 path 설정
        { path: "/mypage", element: <MyPage /> },
        {
          path: "/cart",
          element: <Cart />,
        },
        { path: "/pay", element: <Payment /> },
        { path: "/orderComplete", element: <OrderComplete /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
