import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

export interface Route {
  path: string;
  params?: Record<string, string>;
}

interface RouterContextType {
  currentRoute: Route;
  navigate: (path: string, params?: Record<string, string>) => void;
  goBack: () => void;
  history: Route[];
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>({ path: "/" });
  const [history, setHistory] = useState<Route[]>([{ path: "/" }]);

  const navigate = useCallback(
    (path: string, params?: Record<string, string>) => {
      const newRoute: Route = { path, params };
      setCurrentRoute(newRoute);
      setHistory((prev) => [...prev, newRoute]);
    },
    []
  );

  const goBack = useCallback(() => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentRoute(newHistory[newHistory.length - 1]);
    }
  }, [history]);

  return (
    <RouterContext.Provider value={{ currentRoute, navigate, goBack, history }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}
