from itertools import count

from django.http import HttpResponse, JsonResponse
from . import models
import csv

def import_data():
    with open('data.gouv.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=';')
        header = True
        i = 0
        for row in reader:
            if header:
                header = False
                continue

            insee_code = row[0]
            year = int(row[1])
            title = row[2]
            unite_compte = row[3]
            number = row[4]

            if number == '0' or not number.isdigit() or unite_compte != 'Infraction':
                continue

            town = models.Town.objects.filter(insee_code=insee_code).first()

            i += 1
            percent = i / 77031
            print(f"Import: {round(percent)}%")

            if town is None:
                continue

            event = models.Event(
                town=town,
                year=year,
                description=title,
                count = int(number)
            )

            event.save()

def index(request):
    return HttpResponse("blabla")

def run_import(request):
    import_data()
    return HttpResponse("Done")

def towns(request):
    towns = []

    for town in models.Town.objects.all():
        town_data = {
            'insee_code': town.insee_code,
            'name': town.name
        }

        towns.append(town_data)

    return JsonResponse(towns,safe=False)

def events_per_town(request):
    events = {}

    for event in models.Event.objects.all():
        if events.get(event.town.insee_code) is None:
            events[event.town.insee_code] = {
                'name': event.town.name,
                'insee_code': event.town.insee_code,
                'event_count': 1
            }
            continue

        events[event.town.insee_code]['event_count'] += event.count

    return JsonResponse(events, safe=False)