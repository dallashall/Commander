return (id) => {
  $.ajax({
    method: "GET",
    url: `/api/projects/${id}`
  });
}