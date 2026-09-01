# 📁 Pasta de Imagens do Site (/public/imagens)

Esta é a pasta dedicada para você colocar todas as imagens e fotos do site da Dra. Lígia Magalhães.

## 🚀 Como funciona?

Todos os arquivos colocados dentro de `/public/imagens/` ficam acessíveis diretamente no código pelo caminho `/imagens/nome-do-arquivo.extensao`.

---

## 📸 Nomes Recomendados para os Arquivos:

| Arquivo | Onde aparece no site | Descrição |
| :--- | :--- | :--- |
| `doutora-hero.jpg` | **Início (Hero)** | Foto principal da Dra. Lígia em destaque |
| `doutora-perfil.jpg` | **Seção "A Doutora"** | Foto da Dra. Lígia no consultório / jaleco |
| `clinica-consultorio.jpg` | **Galeria da Clínica** | Foto do consultório / cadeira odontológica |
| `clinica-recepcao.jpg` | **Galeria da Clínica** | Foto da recepção e sala de espera |
| `clinica-equipamentos.jpg` | **Galeria da Clínica** | Foto dos equipamentos e biossegurança |
| `clinica-atendimento.jpg` | **Galeria da Clínica** | Foto do ambiente e atendimento |
| `logo.png` | **Cabeçalho e Rodapé** | Logo da clínica (opcional) |

---

## 💻 Como chamar no código TypeScript/React:

### Opção 1: Usando o catálogo centralizado (`src/data/imagens.ts`)
```tsx
import { IMAGENS } from "../data/imagens";

// Exemplo:
<img src={IMAGENS.doutora.hero} alt="Dra. Lígia Magalhães" />
<img src={IMAGENS.clinica.consultorio} alt="Consultório" />
```

### Opção 2: Chamando diretamente pelo caminho relativo
```tsx
<img src="/imagens/doutora-hero.jpg" alt="Dra. Lígia Magalhães" />
```
