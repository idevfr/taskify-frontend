import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthRoute from "./layouts/AuthRoute.tsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import NewTask from "./components/NewTask.tsx";
import Todos from "./components/Todos.tsx";
import DeletedTasks from "./components/DeletedTasks.tsx";
import Settings from "./components/Settings.tsx";
import CreateSub from "./components/CreateSub.tsx";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthRoute />}>
            <Route index element={<Navigate to={"/home"} />} />
            <Route path="home" element={<Home />}>
              <Route index element={<Navigate to={"todos"} />} />
              <Route path="todos" element={<Todos />} />
              <Route path="create-new" element={<NewTask />} />
              <Route path="trash" element={<DeletedTasks />} />
              <Route path="settings" element={<Settings />} />
              <Route path="todos/:todoId" element={<CreateSub />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
