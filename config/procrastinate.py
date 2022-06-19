import procrastinate
from procrastinate.contrib.django import connector_params

app = procrastinate.App(
    connector=procrastinate.AiopgConnector(**connector_params())
)
