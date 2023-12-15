import PageContent from "../PageContent";
import classes from "./Home.module.css";
import event from "../../assets/event.webp";

function HomePage() {
  return (
    <PageContent>
      <div className={classes["banner-container"]}>
        <img alt="banner" className={classes["hero-banner"]} src={event} />
      </div>
      <div className={classes["main-container"]}>
        <div className={classes.container}>
          <h2>Show your Events</h2>
        </div>
        <div className={classes.container}>
          <p>
            If you are planning any event at large scale, let the people know
            about it and spread happiness to their lives. As we all know <br />
            "A Healthy and Fresh mind has a Healthy Body."
          </p>
        </div>
      </div>
    </PageContent>
  );
}

export default HomePage;
