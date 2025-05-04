FROM python:3.9.22-slim-bullseye
WORKDIR /app
COPY test.py .
CMD ["python", "test.py"]
#CMD ["bash"]
#CMD ["tail", "-f", "/dev/null"]