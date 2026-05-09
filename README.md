# FastDelivery DevOps

## Projeto

Projeto desenvolvido para demonstrar uma arquitetura baseada em microsserviços utilizando Docker, Kubernetes e CI/CD.

---

## Microsserviços

O sistema possui 3 microsserviços:

- Pedidos Service
- Pagamentos Service
- Estoque Service

Cada serviço roda em um container separado.

---

## Docker

O ambiente foi conteinerizado utilizando Docker.

Para subir todos os serviços:

```bash
docker compose up --build
