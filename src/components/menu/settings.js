import { ReactComponent as Dashboard } from "../../assets/svg/icon/distribuidora.svg";
import { ReactComponent as Account } from "../../assets/svg/icon/account.svg";

import { ReactComponent as Config } from "../../assets/svg/icon/config.svg";
import { ReactComponent as Sair } from "../../assets/svg/icon/sair.svg";

export const itens = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: <Dashboard />,
    disabled: false,
  },
  {
    name: "Clientes",
    route: "/clientes",
    icon: <Account />,
    disabled: false,
  },
];

export const footer = [
  {
    name: "Configurações",
    route: "/config",
    icon: <Config />,
    disabled: true,
  },
  {
    name: "Sair",
    route: "/",
    icon: <Sair />,
    disabled: false,
  },
];
