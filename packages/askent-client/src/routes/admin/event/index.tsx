import React from "react";
import { Switch, useRouteMatch, Redirect, useParams } from "react-router-dom";
import PrivateRoute from "../../../components/PrivateRoute";
import Loading from "../../../components/Loading";
import loadable from "@loadable/component";
import AdminEventHeader from "./AdminEventHeader";
import { Layout } from "../../../components/Layout";
import {
  useEventDetailLiveQuerySubscription,
  EventDetailLiveQueryFieldsFragment,
} from "../../../generated/hasuraHooks";

const QuestionsComponent = loadable(() => import("./questions"), {
  fallback: <Loading />,
});
const PollsComponent = loadable(() => import("./polls"), {
  fallback: <Loading />,
});
const AnalyticsComponent = loadable(() => import("./analytics"), {
  fallback: <Loading />,
});

const AdminEvent: React.FC = () => {
  const { path } = useRouteMatch();
  const { id } = useParams<{ id: string }>();
  const [eventDetailData, setEventDetailData] =
    React.useState<EventDetailLiveQueryFieldsFragment>();

  const { loading } = useEventDetailLiveQuerySubscription({
    variables: { where: { id: { _eq: id } } },
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (subscriptionData.data?.event.length) {
        setEventDetailData(subscriptionData.data?.event[0]);
      }
    },
  });

  return (
    <Layout
      header={
        <AdminEventHeader eventDetailData={eventDetailData} loading={loading} />
      }
      body={
        <Switch>
          <Redirect exact path={`${path}`} to={`${path}/questions`} />
          <PrivateRoute path={`${path}/questions`}>
            <QuestionsComponent eventDetailData={eventDetailData} />
          </PrivateRoute>
          <PrivateRoute path={`${path}/polls`}>
            <PollsComponent />
          </PrivateRoute>
          <PrivateRoute path={`${path}/analytics`}>
            <AnalyticsComponent />
          </PrivateRoute>
        </Switch>
      }
    />
  );
};

export default AdminEvent;
