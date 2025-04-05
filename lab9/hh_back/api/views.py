from django.http import JsonResponse
from .models import Company, Vacancy


def CompaniesList(request):
    companies = Company.objects.all()
    data = []
    for company in companies:
        data.append({
            'id': company.id,
            'name': company.name,
            'description': company.description,
            'city': company.city,
            'address': company.address
        })
    return JsonResponse(data, safe=False)


def CompanyDetail(request, id):
    company = Company.objects.get(id=id)
    
    data = {
        'id': company.id,
        'name': company.name,
        'description': company.description,
        'city': company.city,
        'address': company.address
    }
    return JsonResponse(data)


def CompanyVacancies(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)

    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary
        })
    return JsonResponse(data, safe=False)


def VacanciesList(request):
    vacancies = Vacancy.objects.all()
    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company_id': vacancy.company.id
        })
    return JsonResponse(data, safe=False)


def VacancyDetail(request, id):
    vacancy = Vacancy.objects.get(id=id)
    
    data = {
        'id': vacancy.id,
        'name': vacancy.name,
        'description': vacancy.description,
        'salary': vacancy.salary,
        'company_id': vacancy.company.id
    }
    return JsonResponse(data)


def TopTenVacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = []
    for vacancy in vacancies:
        data.append({
            'id': vacancy.id,
            'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company_id': vacancy.company.id
        })
    return JsonResponse(data, safe=False)

