<?php

namespace App\Services\Csp\Policies;

use Spatie\Csp\Directive;
use Spatie\Csp\Policies\Basic;
use Spatie\Csp\Keyword;

class CustomPolicy extends Basic
{
    public function configure()
    {
        parent::configure();

        $this
            ->addDirective(Directive::FONT, "use.fontawesome.com")
            ->addDirective(Directive::STYLE, "use.fontawesome.com")
            ->addDirective(Directive::FRAME, Keyword::NONE)
            ->addDirective(Directive::IMG, "i.picsum.photos picsum.photos localhost:8000")
            ->reportOnly();
    }
}
