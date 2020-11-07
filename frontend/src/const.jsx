const DASHBOARD_MENU = [
  {
    items: [
      {
        title: "Summary",
        id: "main",
      },
    ],
  },
  {
    category: "Project parameters",
    items: [
      {
        title: "Meteo",
        id: "meteo",
      },
    ],
  },
  {
    category: "Simulation parameters",
    items: [
      {
        title: "Plants & electrical",
        id: "plantselectrical",
      },
    ],
  },
  {
    category: "Calculations",
    items: [
      {
        title: "Ongoing calculations",
        id: "ongoingcalculations",
      },
      {
        title: "Calculated",
        id: "calculated",
        notifications: 22,
      },
    ],
  },
];

const CONTENT_PROJECT_PARAMETERS = {
  category: "Project parameters",
  title: "Meteo",
  link: "/dashboard/meteo",
  button_text: "Go to Meteo",
  items: [
    {
      title: "Location",
      value: "Kaunas, Lithuania",
    },
    {
      title: "Coordinates",
      value: "54.8985° N, 23.9036° E",
    },
    {
      title: "Meteo data source",
      value: "PVGIS",
    },
  ],
};

const CONTENT_SIMULATION = {
  category: "Simulation parameters",
  title: "Plants & electrical",
  link: "/dashboard/meteo",
  link_title: "Go to Plants & electrical",
  items: [
    {
      title: "Location",
      value: "Kaunas, Lithuania",
    },
    {
      title: "Coordinates",
      value: "54.8985° N, 23.9036° E",
    },
    {
      title: "Meteo data source",
      value: "PVGIS",
    },
  ],
};

export { DASHBOARD_MENU, CONTENT_PROJECT_PARAMETERS, CONTENT_SIMULATION };
