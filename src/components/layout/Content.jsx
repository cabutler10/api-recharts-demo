import * as React from "react";
import { Typography, Box, Container, Skeleton } from "@mui/material";
import BarChart from "../graphs/BarChart";

export default function Content() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  React.useEffect(() => {
    let isSubscribed = true;

    const fetchData = async () => {
      setLoading(true);
      const results = await fetch(
        "https://semrush-home-test.s3.amazonaws.com/keywords.json"
      );
      const json = await results.json();
      if (isSubscribed) {
        setData(json);
        setLoading(false);
      }
    };

    fetchData().catch(console.error);

    return () => (isSubscribed = false);
  }, []);

  return (
    <Box component="main">
      <Container sx={{ py: 6 }}>
        <Typography variant="h2" sx={{ fontSize: 18, mb: 4 }}>
          Keyword Search Trends
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {data && !loading ? (
            <>
              <BarChart data={data.keywords} />
              <div>
                <Typography sx={{ color: "#00FF00", pb: 1 }}>
                  Winners
                </Typography>
                <Typography sx={{ color: "#8B0000" }}>Losers</Typography>
              </div>
            </>
          ) : (
            <Skeleton variant="rectangular" width="100%" height={400} />
          )}
        </Box>
      </Container>
    </Box>
  );
}
