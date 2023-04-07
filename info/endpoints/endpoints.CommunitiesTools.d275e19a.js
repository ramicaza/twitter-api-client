(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.CommunitiesTools"],
  {
    98515: (e) => {
      e.exports = {
        queryId: "grMra5CiyVe9qUp2Ckv_gA",
        operationName: "CommunityCreateRule",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    84551: (e) => {
      e.exports = {
        queryId: "PqF9tmZFUuIUQJBa1Yp6dA",
        operationName: "CommunityEditBannerMedia",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    28753: (e) => {
      e.exports = {
        queryId: "vjJo0T_--jYPFIDmUJpywQ",
        operationName: "CommunityEditName",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    54185: (e) => {
      e.exports = {
        queryId: "W3KRuCm_asI3kpnfGb-Yow",
        operationName: "CommunityEditPurpose",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    42624: (e) => {
      e.exports = {
        queryId: "jZ0iF8Ej4iT9REu_5Bhbog",
        operationName: "CommunityEditRule",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    9758: (e) => {
      e.exports = {
        queryId: "F9E0Gfuz47z9cHosrzp0Xg",
        operationName: "CommunityEditTheme",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    43103: (e) => {
      e.exports = {
        queryId: "vhKogY1hNfXm7BHHN7lbWA",
        operationName: "CommunityRemoveBannerMedia",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    99812: (e) => {
      e.exports = {
        queryId: "0SSCibJ7ZdA-UPBgTXg1Kw",
        operationName: "CommunityRemoveRule",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    56299: (e) => {
      e.exports = {
        queryId: "y_e8QBHYvU6sGy_K0TFGoQ",
        operationName: "CommunityReorderRules",
        operationType: "mutation",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
          ],
        },
      };
    },
    40873: (e, i, n) => {
      "use strict";
      n.r(i), n.d(i, { default: () => x });
      var _ = n(6899),
        t = n(17360),
        a = n(83175),
        o = n(38269),
        m = n(98515),
        r = n.n(m),
        u = n(84551),
        s = n.n(u),
        l = n(28753),
        p = n.n(l),
        d = n(54185),
        b = n.n(d),
        c = n(42624),
        h = n.n(c),
        y = n(9758),
        v = n.n(y),
        g = n(43103),
        w = n.n(g),
        f = n(99812),
        q = n.n(f),
        I = n(56299),
        C = n.n(I);
      const x = ({ apiClient: e, featureSwitches: i }) => ({
        editCommunityName: (n) =>
          e
            .graphQL(
              p(),
              { communityId: n.communityId, name: n.name, ...(0, a.S)(i) },
              (0, t.kj)((e) => {
                var i;
                return !(null != (i = e.community_name_put) && i.name);
              }, "GQL Communities: Failed to edit community name")
            )
            .then((e) => (0, _.Fv)(e.community_name_put, o.ZP)),
        editCommunityPurpose: (n) =>
          e
            .graphQL(
              b(),
              {
                communityId: n.communityId,
                description: n.purpose,
                ...(0, a.S)(i),
              },
              (0, t.kj)((e) => {
                var i;
                return !(
                  null != (i = e.community_description_put) && i.description
                );
              }, "GQL Communities: Failed to edit community purpose")
            )
            .then((e) => (0, _.Fv)(e.community_description_put, o.ZP)),
        editCommunityTheme: (n) =>
          e
            .graphQL(
              v(),
              { communityId: n.communityId, theme: n.theme, ...(0, a.S)(i) },
              (0, t.kj)((e) => {
                var i;
                return !(
                  null != (i = e.community_custom_theme_put) && i.custom_theme
                );
              }, "GQL Communities: Failed to edit community theme")
            )
            .then((e) => (0, _.Fv)(e.community_custom_theme_put, o.ZP)),
        editCommunityRule: (n) =>
          e
            .graphQL(
              h(),
              {
                communityId: n.communityId,
                ruleId: n.ruleId,
                name: n.name,
                description: n.description,
                ...(0, a.S)(i),
              },
              (0, t.kj)(
                (e) => !(null != e && e.community_rule_update),
                "GQL Communities: Failed to edit community rule"
              )
            )
            .then((e) => (0, _.Fv)(e.community_rule_update, o.ZP)),
        createCommunityRule: (n) =>
          e
            .graphQL(
              r(),
              {
                communityId: n.communityId,
                name: n.name,
                description: n.description,
                ...(0, a.S)(i),
              },
              (0, t.kj)(
                (e) => !(null != e && e.community_rule_create),
                "GQL Communities: Failed to create community rule"
              )
            )
            .then((e) => (0, _.Fv)(e.community_rule_create, o.ZP)),
        removeCommunityRule: (n) =>
          e
            .graphQL(
              q(),
              { communityId: n.communityId, ruleId: n.ruleId, ...(0, a.S)(i) },
              (0, t.kj)(
                (e) => !(null != e && e.community_rule_remove),
                "GQL Communities: Failed to remove community rule"
              )
            )
            .then((e) => (0, _.Fv)(e.community_rule_remove, o.ZP)),
        reorderCommunityRules: (n) =>
          e
            .graphQL(
              C(),
              {
                communityId: n.communityId,
                ruleIds: n.ruleIds,
                ...(0, a.S)(i),
              },
              (0, t.kj)(
                (e) => !(null != e && e.community_rules_reorder),
                "GQL Communities: Failed to reorder community rules"
              )
            )
            .then((e) => (0, _.Fv)(e.community_rules_reorder, o.ZP)),
        editCommunityBannerMedia: (n) =>
          e
            .graphQL(
              s(),
              {
                communityId: n.communityId,
                mediaId: n.mediaId,
                ...(0, a.S)(i),
              },
              (0, t.kj)((e) => {
                var i;
                return !(
                  null != (i = e.community_custom_banner_media_put) &&
                  i.custom_banner_media
                );
              }, "GQL Communities: Failed to edit community banner media")
            )
            .then((e) => (0, _.Fv)(e.community_custom_banner_media_put, o.ZP)),
        removeCommunityBannerMedia: (n) =>
          e
            .graphQL(
              w(),
              { communityId: n.communityId, ...(0, a.S)(i) },
              (0, t.kj)(
                (e) => !e.community_custom_banner_media_delete,
                "GQL Communities: Failed to remove community banner media"
              )
            )
            .then((e) =>
              (0, _.Fv)(e.community_custom_banner_media_delete, o.ZP)
            ),
      });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.CommunitiesTools.d275e19a.js.map