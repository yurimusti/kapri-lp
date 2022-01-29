import React, { useState, useEffect } from "react";
import logo from "../../assets/img/kapriLogo.png";

import history from "../../services/history";
import * as Styled from "./styles";

import { itens, footer } from "./settings";

const Item = ({
  name = "",
  routeTo = "",
  icon = () => {},
  disabled = false,
  onSelect = () => {},
  active,
}) => {
  const _handleClickVerify = () => {
    if (disabled === false) {
      onSelect(routeTo);
    }
  };

  return (
    <Styled.Item
      onClick={_handleClickVerify}
      active={active}
      disabled={disabled}
    >
      <Styled.ItemIcon>{icon}</Styled.ItemIcon>
      <Styled.ItemTextContainer>
        <Styled.ItemText active={active}>{name}</Styled.ItemText>
      </Styled.ItemTextContainer>

      <div style={{ marginRight: 32 }}>
        {disabled === true && (
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.14289 6.42899V4.14328C3.14289 3.38551 3.44391 2.65879 3.97973 2.12297C4.51555 1.58715 5.24227 1.28613 6.00004 1.28613C6.7578 1.28613 7.48452 1.58715 8.02034 2.12297C8.55616 2.65879 8.85718 3.38551 8.85718 4.14328V6.42899M2.00003 6.42899H10C10.6312 6.42899 11.1429 6.94066 11.1429 7.57185V11.5718C11.1429 12.203 10.6312 12.7147 10 12.7147H2.00003C1.36885 12.7147 0.857178 12.203 0.857178 11.5718V7.57185C0.857178 6.94066 1.36885 6.42899 2.00003 6.42899Z"
              stroke="#0181D0"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </div>
    </Styled.Item>
  );
};

const Menu = ({ onSelect }) => {
  const [active, setActive] = useState("/dashboard");

  useEffect(() => {
    setActive(history.location.pathname);
  }, [history]);

  return (
    <Styled.MainMenu>
      <Styled.LogoContainer>
        <img src={logo} />
      </Styled.LogoContainer>
      <Styled.ItensContainer>
        {itens.map((e) => (
          <Item
            name={e.name}
            routeTo={e.route}
            icon={e.icon}
            active={e.route === active}
            disabled={e.disabled}
            onSelect={() => {
              setActive(e.route);
              history.push(e.route);
            }}
          />
        ))}
      </Styled.ItensContainer>
      <Styled.FooterContainer>
        {footer.map((e) => (
          <Item
            name={e.name}
            routeTo={e.route}
            icon={e.icon}
            disabled={e.disabled}
            active={e.route === active}
            onSelect={() => {
              setActive(e.route);
              history.push(e.route);
              if (e.route === "/") {
                localStorage.clear();
              }
            }}
          />
        ))}
      </Styled.FooterContainer>
    </Styled.MainMenu>
  );
};

export default Menu;
