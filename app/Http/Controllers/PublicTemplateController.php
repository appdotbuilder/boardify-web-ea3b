<?php

namespace App\Http\Controllers;

use App\Models\GreetingTemplate;
use Inertia\Inertia;

class PublicTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $templates = GreetingTemplate::active()
            ->orderBy('category')
            ->paginate(16);

        return Inertia::render('boardify/templates', [
            'templates' => $templates,
        ]);
    }
}