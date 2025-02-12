module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/event/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/event-service/event/v1/create",
        type: "POST",
        functionName: "createEvent",
      },
    },
    {
      sourceRoute: "/interface/v1/event/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/event-service/event/v1/list",
        type: "POST",
        functionName: "listEvents",
      },
    },
    {
      sourceRoute: "/interface/v1/event/:id",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/event-service/event/v1/:id",
        type: "PATCH",
        functionName: "updateEvent",
      },
    },
  ],
};
