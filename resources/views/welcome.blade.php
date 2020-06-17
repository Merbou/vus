<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env("APP_NAME")}}</title>
    <!-- Fonts -->
    <link rel="icon" id="favicon" href="{{ URL::asset('/images/favicon.png') }}" type="image/x-icon" />

</head>

<body>
    <div id="app"></div>
    <audio id="audioPlayer" muted></audio>
</body>
<script src="/js/app.js"></script>

</html>
<style>
    html,
    body {
        height: 100%;
        margin: 0;
    }
</style>