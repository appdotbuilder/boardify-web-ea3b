<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Inertia\Inertia;

class PublicEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::active()
            ->with(['partner.user', 'greetings'])
            ->where('registration_start', '<=', now())
            ->where('registration_end', '>=', now())
            ->orderBy('event_date')
            ->paginate(12);

        return Inertia::render('boardify/events', [
            'events' => $events,
        ]);
    }
}