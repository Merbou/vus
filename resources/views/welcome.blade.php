<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{env("APP_NAME")}}</title>
    <link rel="stylesheet" href="/css/app.css" nonce="{{csp_nonce()}}">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" nonce="{{csp_nonce()}}">
    <!-- Fonts -->
    <link rel="icon" id="favicon" href="{{ URL::asset('/images/favicon.png') }}" type="image/x-icon" />

    <style nonce="{{csp_nonce()}}">
        html,
        body {
            height: 100%;
            margin: 0;
        }

        ::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        ::-webkit-scrollbar-track {
            background: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background: rgb(82, 80, 80);
            border-radius: 40px;
        }
    </style>
</head>

<body>
    <div id="app"></div>
    <audio id="audioPlayer" muted></audio>
</body>
<script nonce="{{csp_nonce()}}">
    window.NONCE_ID = '{{csp_nonce()}}';
</script>
<script src="/js/app.js" nonce="{{csp_nonce()}}"></script>
<script src="/js/vendor.js" nonce="{{csp_nonce()}}"></script>
<script src="/js/manifest.js" nonce="{{csp_nonce()}}"></script>

</html>