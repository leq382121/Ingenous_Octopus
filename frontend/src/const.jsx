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
  button_text: "Go to Calculated",
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
    {
      no: 22,
      date: '2020-09-17',
      type: 'Preliminary',
      yield: {
        value: 1000,
        unit: 'KWh'
      },
      configuration: {
        value: "View",
        link: "test"
      },
    },
    {
      no: 21,
      date: '2020-09-08',
      type: 'Detailed',
      yield: {
        value: 1020,
        unit: 'KWh'
      },
      configuration: {
        value: "View",
        link: "#"
      },
    },
    {
      no: 20,
      date: '2020-09-05',
      type: 'Detailed',
      yield: {
        value: 1320,
        unit: 'KWh'
      },
      configuration: {
        value: "View",
        link: "#"
      },
    },
  ],
};

const CONTENT_CALCULATE_CARD = {
  subtitle: "Select and calculate",
  title: "Starting 4 new calculations",
  items: [
    {
      title: "Plant versions",
      value: 3,
    },
    {
      title: "Module versions",
      value: 2,
    }
  ],
}

export {
  DASHBOARD_MENU,
  CONTENT_PROJECT_PARAMETERS,
  CONTENT_SIMULATION,
  CONTENT_CALCULATIONS,
  CONTENT_CALCULATE_CARD,
};
