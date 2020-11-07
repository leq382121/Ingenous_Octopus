const DASHBOARD_MENU = [
  {
    items: [
      {
        title: "Summary",
        id: "main",
      }
    ]
  },
  {
    category: 'Project parameters',
    items: [
      {
        title: "Meteo",
        id: "meteo",
      }
    ]
  },
  {
    category: 'Simulation parameters',
    items: [
      {
        title: "Plants & electrical",
        id: "plantselectrical",
      }
    ]
  },
  {
    category: 'Calculations',
    items: [
      {
        title: "Ongoing calculations",
        id: "ongoingcalculations",
      },
      {
        title: "Calculated",
        id: "calculated",
        notifications: 22
      }
    ]
  }
]

export {
  DASHBOARD_MENU,
}
