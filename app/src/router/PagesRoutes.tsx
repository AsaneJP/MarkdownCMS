import { Article } from "../components/pages/Article";
import { Editor } from "../components/pages/Editor";
import { Home } from "../components/pages/Home";
import { Mail } from "../components/pages/Mail";
import { Report } from "../components/pages/Report";
import { Setting } from "../components/pages/Setting";
import { User } from "../components/pages/User";

export const PagesRoutes = [
  {
    path: '/',
    title: "Home",
    children: <Home />
  },
  {
    path: '/article',
    title: "Article",
    children: <Article />
  },
  {
    path: '/editor',
    title: "Editor",
    children: <Editor />
  },
  {
    path: '/mail',
    title: "Mail",
    children: <Mail />
  },
  {
    path: '/report',
    title: "Report",
    children: <Report />
  },
  {
    path: '/setting',
    title: "Setting",
    children: <Setting />
  },
  {
    path: '/user',
    title: "User",
    children: <User />
  }
]
