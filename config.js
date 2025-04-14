export const config = {
  domainSource: "https://www.nursejobs.health", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/pay/[^/]+/[^/]+",
          metaDataEndpoint: "https://xnfj-dys4-m8rx.n7d.xano.io/api:dVTDQ57n/static_pay_metadata/{job_type_slug}/{geo_area_slug}"
      }
		//,
     // {
     //     pattern: "/team/profile/[^/]+",
      //    metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:LjwxezTv/team/profile/{profile_id}/meta"
     // }
      // Add more patterns and their metadata endpoints as needed
  ]
};
