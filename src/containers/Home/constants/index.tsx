import { isAdmin } from "../../../config/Utils";

const subItens = () => {
  let subItens = [{
    id: 2,
    name: "Cidades",
    route: "/cadastros/cidades"
  }];

  return subItens;
};

export const menuItens = [
  {
    name: "Cadastros",
    description: "registre todos os itens",
    icon: "wpforms",
    visible: true,
    group: [
      {
        name: "",
        route: "",
        visible: false,
        items: subItens()
      }
    ]
  }
];