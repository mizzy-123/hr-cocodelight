<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link rel="stylesheet" href="/assets/css/dashlite.css?ver=3.0.0">
    <link id="skin-default" rel="stylesheet" href="/assets/css/theme.css?ver=3.0.0">
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
  </head>
  <body class="nk-body bg-lighter npc-default has-sidebar">
    @inertia
    <script src="/assets/js/bundle.js?ver=3.0.0"></script>
    <script src="/assets/js/scripts.js?ver=3.0.0"></script>
    <script src="/assets/js/charts/chart-ecommerce.js?ver=3.0.0"></script>
  </body>
</html>