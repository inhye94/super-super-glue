/**
 * 2024.01.16
 * app 구조
 *
 * 2024.01.18
 * app 구조 수정
 */

import { Outlet } from "react-router-dom";
import Gnb from "./widgets/gnb/Gnb";
import ScreenStateProvider from "./context/ScreenStateContext";
import AuthContextProvider from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutWrapper from "./components/wrapper/LayoutWrapper";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthContextProvider>
      <ScreenStateProvider>
        <QueryClientProvider client={queryClient}>
          <section className="">
            <Gnb />

            <LayoutWrapper extraStyle="mt-[16px] mb-[84px] md:mt-[36px]">
              <Outlet />
            </LayoutWrapper>
          </section>
        </QueryClientProvider>
      </ScreenStateProvider>
    </AuthContextProvider>
  );
};

export default App;
