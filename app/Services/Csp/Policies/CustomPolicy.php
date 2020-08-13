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

        // $this->addDirective(Directive::STYLE, "use.fontawesome.com");
        $this->addDirective(Directive::FRAME, Keyword::NONE);
        // $this->reportOnly();
    }
}
