BootStarp is linked using CDN
 Option 3 (ASP.NET Razor), you’re treating your .html files as Razor views (.cshtml) inside an ASP.NET MVC or Razor Pages app.

Here’s exactly how to do that in Razor:

✅ Step-by-Step to Use _Layout.cshtml in Razor
🔹 1. Create _Layout.cshtml

/Views/Shared/_Layout.cshtml
Use layout placeholders like this:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>@ViewBag.Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

    <!-- Optional external CDNs -->
    @RenderSection("ExternalCDNs", required: false)

    <!-- Styles -->
    <link rel="stylesheet" href="~/global.css" />
    <link rel="stylesheet" href="~/css/@ViewBag.Role.css" />
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a class="navbar-brand" href="#">Beauty App</a>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Logout</a></li>
            </ul>
        </div>
    </nav>

    <main class="container mt-5">
        @RenderBody()
    </main>

    <footer class="bg-light text-center py-3 mt-5">
        &copy; 2025 Four Seasons Beauty App
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
🔹 2. In Each View (e.g., admin.cshtml, artist.cshtml)
Place under /Views/Admin/admin.cshtml:
@{
    Layout = "~/Views/Shared/_Layout.cshtml";
    ViewBag.Title = "Admin Portal";
    ViewBag.Role = "admin";
}

@section ExternalCDNs {
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
}
🔹 3. Final Structure Example
bash
Copy
Edit
/Views
  /Admin
    admin.cshtml
  /Artist
    artist.cshtml
  /Customer
    customer.cshtml
  /Franchise
    franchise.cshtml
  /Shared
    _Layout.cshtml
/css
  admin.css
  artist.css
  ...
/global.css
