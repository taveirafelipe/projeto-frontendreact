import {
    ButtonMenu,
    Strong,
    Navigation,
    ButtonImg2,
    Svg
} from "./style";

export const Nav = ({home, items}) => {
  return (
    <>
      <Navigation>
        {/* <ButtonImg2 onClick={() => home()}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              strokeWidth="0.5"
              stroke="#334f53"
            />{" "}
            <path
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              stroke="#334f53"
            />{" "}
          </Svg>
        </ButtonImg2> */}
        <ButtonMenu onClick={() => items()}>
          <Svg viewBox="0 -10 100 80" width="25" height="25">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </Svg>
          <Strong>Todos os itens</Strong>
        </ButtonMenu>
      </Navigation>
    </>
  );
};
