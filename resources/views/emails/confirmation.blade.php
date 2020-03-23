@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
Your code activation is : {{$code_activation}}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
