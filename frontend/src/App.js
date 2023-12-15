import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./components/Pages/EditEvent";
import ErrorPage from "./components/Pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./components/Pages/EventDetails";
import EventsPage, { loader as eventsLoader } from "./components/Pages/Events";
import EventsRootLayout from "./components/Pages/EventsRoot";
import HomePage from "./components/Pages/Home";
import NewEventPage from "./components/Pages/NewEvent";
import RootLayout from "./components/Pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./components/NewsLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
