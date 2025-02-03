module.exports = {
  routes: [
    {
      sourceRoute: "/interface/v1/account/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/create",
        type: "POST",
        functionName: "createUser",
      },
    },
    {
      sourceRoute: "/interface/v1/account/login",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/auth/login",
        type: "POST",
        functionName: "login",
      },
    },
    {
      sourceRoute: "/interface/v1/tenant/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/tenant/create",
        type: "POST",
        functionName: "tenantCreate",
      },
    },
    {
      sourceRoute: "/interface/v1/tenant/read",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/tenant/read",
        type: "GET",
        functionName: "tenantRead",
      },
    },
    {
      sourceRoute: "/interface/v1/tenant/update/:id",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/tenant/update/:id",
        type: "PATCH",
        functionName: "tenantUpdate",
      },
    },
    {
      sourceRoute: "/interface/v1/cohort/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohort/create",
        type: "POST",
        functionName: "cohortCreate",
      },
    },
    {
      sourceRoute: "/interface/v1/cohort/update/:id",
      type: "PUT",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohort/update/:id",
        type: "PUT",
        functionName: "cohortUpdate",
      },
    },
    {
      sourceRoute: "/interface/v1/cohort/search",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohort/search",
        type: "POST",
        functionName: "cohortSearch",
      },
    },
    {
      sourceRoute: "/interface/v1/cohort/mycohorts/:id",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohort/mycohorts/:id",
        type: "GET",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/cohort/cohortHierarchy/:id",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohort/cohortHierarchy/:id",
        type: "GET",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/cohortmember/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohortmember/list",
        type: "POST",
        functionName: "getCohortMember",
      },
    },
    {
      sourceRoute: "/interface/v1/cohortmember/create",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohortmember/create",
        type: "POST",
        functionName: "createCohortMember",
      },
    },
    {
      sourceRoute: "/interface/v1/cohortmember/read/:id",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohortmember/read/:id",
        type: "GET",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/cohortmember/update/:id",
      type: "PUT",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/cohortmember/update/:id",
        type: "PUT",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/user/read/:id",
      type: "GET",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/read/:id",
        type: "GET",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/user/update/:id",
      type: "PATCH",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/update/:id",
        type: "PATCH",
        functionName: "getCohortDetails",
      },
    },
    {
      sourceRoute: "/interface/v1/user/list",
      type: "POST",
      inSequence: true,
      orchestrated: true,
      targetRoute: {
        path: "/user/v1/list",
        type: "POST",
        functionName: "getCohortDetails",
      },
    },
  ],
};
