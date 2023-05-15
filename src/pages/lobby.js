import getConfig from "next/config";

export default function Lobby({ coinflips }) {
  return (
      <>
      Lobby
      {JSON.stringify(coinflips)}
      </>
  )
}

export async function getServerSideProps(context) {
  const { publicRuntimeConfig } = getConfig();
  const url = `${publicRuntimeConfig?.apiEndpoint}coinflip`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
        Accept: "application/json"
      }
  });

  let coinflips;

  if (response.ok) {
    coinflips = await response.json();
  }

  return {
    props: {
      coinflips
    }, // will be passed to the page component as props
  };
}