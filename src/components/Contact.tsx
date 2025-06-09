import { account, databases, ID } from "../appwrite";
import React, { useState, useEffect } from "react";
import Background from "./arwes/Background.tsx";
import { Animator, Text } from "@arwes/react";
import { OAuthProvider } from "appwrite";
import { allIconsArray } from "../constants/SocialsArray.jsx";
import { linksArrayWithLabel as links } from "../constants/links.ts";
import { transformParallel } from "../algorithm.ts";
import NeroFrame from "./arwes/frames/NeroFrame.tsx";
import "./Contact.module.css";
import TranslucentInput from "./TranslucentInput.tsx";
import TranslucentTextArea from "./TranslucentTextArea.tsx";
import { bleepPlay, type BleepsNames } from "../bleeps.tsx";
import { Toaster } from "react-hot-toast";
import { Notifi, type ToastKind } from "./Notifi.tsx";
import Button from "./Button.tsx";
import ContactIconLinks from "./ContactIconLinks.tsx";

const DownArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="32px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="cyan"
  >
    <path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z" />
  </svg>
);

const Contact = (): React.JSX.Element => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [colorOfFrameDeco, setColorOfFrameDeco] =
    useState<React.CSSProperties["color"]>("hsl(180, 75%, 50%)");
  const [colorOfNeroFrameBG, setColorOfNeroFrameBG] =
    useState<React.CSSProperties["color"]>("hsl(150, 95%, 15%)");
  const [toastKind, setToastKind] = useState<ToastKind>(undefined);

  useEffect(() => {
    account
      .get()
      .then((user) => setUserEmail(user.email))
      .catch(() => {
        console.log("Not logged In!");
      });
  }, []);

  useEffect(() => {
    if (toastKind) {
      // The bleep sound name is derived directly from the toast kind.
      const bleepToPlay = toastKind as BleepsNames;
      bleepPlay(bleepToPlay);
      Notifi.ToastMessage(toastKind);

      // Reset toastKind after the notification, so it can be triggered again.
      setToastKind(undefined);
    }
  }, [toastKind]);

  const [active, setActive] = useState(true);

  useEffect(() => {
    const tid = setTimeout(() => setActive((v) => !v), active ? 6_000 : 2_000);
    return () => clearTimeout(tid);
  }, [active]);

  const handleAuthenticate = () => {
    bleepPlay("click");
    const redirect = window.location.href;
    account.createOAuth2Session(
      OAuthProvider.Google,
      redirect,
      `${redirect}/fail`,
    );
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const subject = e.currentTarget.subject.value;
      const message = e.currentTarget.message.value;
      const userId = await account.get().then((user) => user.$id);
      const response = await databases.createDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        "contactMessages", // collection ID
        ID.unique(),
        {
          email: userEmail,
          subject,
          message,
          userID: userId,
          createdAt: new Date().toISOString(),
        },
      );
      console.log("Message saved:", response);
      setToastKind("success");
      setSubject("");
      setMessage("");
    } catch (error) {
      setToastKind("error");
      console.error("Submission failed:", error);
    }
  };

const mouseOverEventHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.currentTarget.style.transform = "scale(1.1)";
  e.currentTarget.style.filter = "drop-shadow(0 0 12px rgba(0, 255, 204, 0.8))";
};
const mouseOutEventHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.currentTarget.style.transform = "scale(1)";
  e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(0, 255, 204, 0.5))";
};

  return (
    <div>
      <Background />
      <Text
        style={{
          color: "cyan",
          top: "12rem",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
        as="h1"
        className="h2"
      >
        04 : Contact
      </Text>
      <br />
      <Text
        style={{
          color: "cyan",
          top: "12rem",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
        as="h3"
        className="h3"
      >
        Have an Idea in Mind?
      </Text>
      <br />
      <Text
        style={{
          color: "cyan",
          top: "12rem",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
        as="h3"
        className="h3"
      >
        Connect With ME
      </Text>
      <Text
        style={{
          color: "cyan",
          top: "13rem",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
        }}
        as="h6"
        className="h6"
      >
        <DownArrowIcon />
      </Text>

      <section
        style={{
          marginRight: "10rem",
        }}
      >
        <article>
          <form
            onSubmit={handleSubmitForm}
            style={{
              display: "flex",
              flex: 1,
              flexWrap: "wrap",
              justifyContent: "center",
              position: "relative",
              top: "25rem",
              marginRight: "10rem",
              minHeight: "100%",
              overflowY: "hidden",
            }}
          >
            <div className="row">
              <Animator active={active} duration={{ enter: 5, exit: 1 }}>
                <div className="form-group">
                  <TranslucentInput
                    name="email"
                    inputType="email"
                    placeholder="Email"
                    readonly={Boolean(userEmail)}
                    value={userEmail || ""}
                    onChangeHandler={
                      userEmail
                        ? undefined
                        : (e: React.ChangeEvent<HTMLInputElement>) =>
                            setUserEmail(e.target.value)
                    }
                    onFocus={() => {
                      if (!userEmail) handleAuthenticate();
                    }}
                    autoComplete={userEmail ? undefined : "on"}
                  />
                </div>
                <div className="form-group">
                  <TranslucentInput
                    name="subject"
                    inputType="text"
                    placeholder="subject"
                    value={subject}
                    onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSubject(e.target.value)
                    }
                  />
                </div>
                <div className="form-group">
                  <TranslucentTextArea
                    name="message"
                    rows={6}
                    placeholder="Enter your message"
                    value={message}
                    onChangeHandler={(
                      e: React.ChangeEvent<HTMLTextAreaElement>,
                    ) => setMessage(e.target.value)}
                  />
                </div>
              </Animator>
              <div>
                <NeroFrame
                  height={40}
                  width={55}
                  frameDecoColor={colorOfFrameDeco}
                  frameBGColor={colorOfNeroFrameBG}
                >
                  <Button
                    style={{
                      background: "inherit",
                      border: "none",
                    }}
                    name="click"
                    buttonType="submit"
                    onMouseEnter={() => {
                      setColorOfFrameDeco("rgb(57, 255, 20)");
                      setColorOfNeroFrameBG("black");
                    }}
                    onMouseLeave={() => {
                      setColorOfNeroFrameBG("hsl(150, 95%, 15%)");
                      setColorOfFrameDeco("hsl(180, 75%, 50%)");
                    }}
                  >
                    <Toaster />

                    <Text
                      as="b"
                      style={{
                        color: colorOfFrameDeco,
                        left: "0.5rem",
                        top: "0.5rem",
                        fontFamily: "JetBrains Mono",
                      }}
                    >
                      <big>SEND</big>
                    </Text>
                  </Button>
                </NeroFrame>
              </div>
            </div>
          </form>
        </article>
      </section>
      <span
        style={{
          marginLeft: "10rem",
        }}
      ></span>

      <Animator duration={{ enter: 5, exit: 1 }}>
        <section>
          <aside
            className="col-md-5 address-container"
            style={{ float: "right", bottom: "10rem" }}
          >
            <div>
              <Text as="h3" style={{ color: "cyan" }}>
                Get In Touch
              </Text>
              <Text
                as="ul"
                style={{
                  color: "cyan",
                  listStyleType: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {ContactIconLinks.map(({ href, El }, index) => (
                  <li key={index}>
                    <big>
                      <div>
                        <a onMouseOver={mouseOverEventHandler} onMouseOut={mouseOutEventHandler}
                          href={href}
                          style={{
                            color: "cyan",
                          }}
                        >
                          <El />
                        </a>
                      </div>
                    </big>
                  </li>
                ))}
              </Text>
            </div>

            <div>
              <Text as="h3" style={{ color: "cyan" }}>
                Follow me on social networks
              </Text>

              <span
                style={{
                  marginLeft: "15%",
                  marginRight: "20%",
                }}
              >
                {transformParallel(
                  /* Nah bro, Nah! I'm not gonna include Daily.Dev in Social Networks */
                  allIconsArray,
                  links.slice(0, links.length - 1),
                  (Icon, link, id) => (
                    <Text onMouseOver={mouseOverEventHandler} onMouseOut={mouseOutEventHandler}
                      key={id}
                      as="a"
                      href={link.URL}
                      title={`Debajyati Dey on ${link.label}`}
                      style={{
                        color: "cyan",
                        marginRight: id < links.length - 1 ? "1rem" : "0",
                      }}
                    >
                      <Icon />
                    </Text>
                  ),
                )}
              </span>
            </div>
          </aside>
        </section>
      </Animator>
    </div>
  );
};
export default Contact;
