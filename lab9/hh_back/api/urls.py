from django.urls import path
from .views import (
    CompanyDetail, CompanyVacancies, CompaniesList, VacanciesList, VacancyDetail, TopTenVacancies
)

urlpatterns = [
    path('companies/', CompaniesList),
    path('companies/<int:id>/', CompanyDetail),
    path('companies/<int:id>/vacancies/', CompanyVacancies),
    path('vacancies/', VacanciesList),
    path('vacancies/<int:id>/', VacancyDetail),
    path('vacancies/top_ten/', TopTenVacancies),
]
