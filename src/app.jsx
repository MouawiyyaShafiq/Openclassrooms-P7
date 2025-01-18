import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PageAccueil from "./pages/pageAccueil"
import PageAPropos from "./pages/pageAPropos"
import PageLogement from "./pages/pageLogement"
import PageErreur from "./pages/pageErreur"

const router = createBrowserRouter([

    {
        path : "/",
        element : <PageAccueil/>,
    },
    {
        path : "/A-Propos",
        element : <PageAPropos/>,
    },
    {
        path : "/Logement",
        element : <PageLogement/>,
    },
    {
        path : "*",
        element : <PageErreur/>,
    },
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;