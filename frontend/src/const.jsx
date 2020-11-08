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
  link: "/dashboard/plantselectrical",
  button_text: "Go to Plants & electrical",
  items: [
    {
      title: "Plant versions",
      value: 3,
    },
    {
      title: "Module versions",
      value: 2,
      button_text: "Quick add",
    },
    {
      title: "Inverter versions",
      value: 6,
      button_text: "Quick add",
    },
  ],
};

const CONTENT_CALCULATIONS = {
  category: "Calculations",
  title: "Recently calculated",
  link: "/dashboard/calculations",
  button_text: "Go to Plants & electrical",
  table_col: [
    {
      title: "No.",
      id: "no",
    },
    {
      title: "Date",
      id: "date",
    },
    {
      title: "Type",
      id: "type",
    },
    {
      title: "Configuration",
      id: "configuration",
    },
    {
      title: "Yield",
      id: "yield",
    },
  ],
  items: [
    [
      {
        value: "22",
        id: "no",
      },
      {
        value: "2020-09-17",
        id: "date",
      },
      {
        value: "Preliminary",
        id: "type",
      },
      {
        value: "Configuration",
        link: "#",
        id: "configuration",
      },
      {
        value: "1000 kWh",
        id: "yield",
      },
    ],
    [
      {
        value: "21",
        id: "no",
      },
      {
        value: "2020-09-08",
        id: "date",
      },
      {
        value: "Detailed",
        id: "type",
      },
      {
        value: "Configuration",
        link: "#",
        id: "configuration",
      },
      {
        value: "1020 kWh",
        id: "yield",
      },
    ],
  ],
};

export {
  DASHBOARD_MENU,
  CONTENT_PROJECT_PARAMETERS,
  CONTENT_SIMULATION,
  CONTENT_CALCULATIONS,
};
