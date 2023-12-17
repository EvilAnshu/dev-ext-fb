async function p(t, e, s = "json") {
  const a = await fetch(e || "https://www.facebook.com/api/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    mode: "cors",
    credentials: "include",
    body: t,
  });
  return "json" === s ? await a.json() : await a.text();
}

document
  .getElementById("my-send-btn")
  .addEventListener("click", async function () {
    console.log("click send");

    // URL of the API endpoint
    const apiUrl = "https://www.facebook.com/messaging/send/";

    // Form data
    const formData = {
      client: "mercury",
      action_type: "ma-type:user-generated-message",
      body: "hiiii",
      has_attachment: false,
      ephemeral_ttl_mode: 0,
      message_id: 28680927148869,
      offline_threading_id: 28680927148869,
      other_user_fbid: 100007521065673,
      source: "chat:web",
      "specific_to_list[0]": "fbid:100007521065673",
      "specific_to_list[1]": "fbid:100053653778137",
      timestamp: 1564061116119,
      request_user_id: 100053653778137,
      __user: 100053653778137,
      __a: 1,
      __req: "1n",
      __be: 1,
      dpr: 1.5,
      __rev: 1010465578,
      __s: ":38ai1u:mxgv29",
      fb_dtsg:
        "NAcO2U8bHPDRkFhbEY3DNTrxwMNfaexr__arZjpynW_le-jpwoTNuxg:25:1695571329",
      jazoest:
        "278659979508556987280688210770104986989516878841141201197778102971011201149595971149010611212111087951081014510611211911184781171201035850535849545753535549515057",
      ui_push_phase: "c3",
      __spin_r: 1010465578,
      __spin_b: "trunk",
    };

    let h = [];
    let t = 100007521065673;
    let i = 100053653778137;
    let c = 1010465578;
    let d = false,
      b = false;
    let _ = [];
    let r =
      "NAcO2U8bHPDRkFhbEY3DNTrxwMNfaexr__arZjpynW_le-jpwoTNuxg:25:1695571329";
    let o =
      "278659979508556987280688210770104986989516878841141201197778102971011201149595971149010611212111087951081014510611211911184781171201035850535849545753535549515057";
    let u = Math.floor(1e14 * Math.random()) + 1;
    let e = "Hiiiiiiiiiiiiiiiiiiii";
    let y = "&body=" + encodeURIComponent(e);
    // console.log("y", y);
    // console.log("e", e);
    const v = await p(
      `client=mercury&action_type=ma-type%3Auser-generated-message${y}&has_attachment=${
        d || b ? "true" : "false"
      }${_}${h}&ephemeral_ttl_mode=0&message_id=${u}&offline_threading_id=${u}&other_user_fbid=${t}&source=source:chat:web&specific_to_list[0]=fbid%3A${t}&specific_to_list[1]=fbid%3A${i}&timestamp=1564061116109&request_user_id=${i}&__user=${i}&__a=1&__req=1n&__be=1&dpr=1.5&__rev=${c}&__s=%3A38ai1u%3Amxgv29&fb_dtsg=${r}&jazoest=${o}&ui_push_phase=c3&__spin_r=${c}&__spin_b=trunk`,
      "https://www.facebook.com/messaging/send/",
      "text"
    );

    // Convert the form data into a URL-encoded string
    // const urlEncodedData = new URLSearchParams(formData).toString();

    // // Make the POST request
    // fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: urlEncodedData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Response:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  });
