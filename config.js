export const config = {
  domainSource: "https://www.nursejobs.health", // Your WeWeb app link
  metaDataEndpoint: "https://xnfj-dys4-m8rx.n7d.xano.io/api:dVTDQ57n/static_pay_metadata/{job_type_slug}/{geo_area_slug}", // Link of the endpoint that returns the metadata. /{id} will be added to this path. With id being the last parameter of the dynamic page
  patterns: {
    dynamicPage: "/pay/[^/]+/[^/]+"
  }
};
