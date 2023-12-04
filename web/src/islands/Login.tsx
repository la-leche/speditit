"use client";

import Link from "next/link";
import { Card } from "../ui/index";
import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export function LoginIsland(func: (arg: object) => void) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShow] = useState<boolean>(false);
  return (
    <Card title="Login to your account by SpeditIt">
      <Form onSubmit={handleSubmit((data) => func(data))}>
        <Col className="mb-3">
          <Form.Group as={Col} controlId="validationEmail">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="email"
              placeholder="E-Mail"
              {...register("email", { required: true })}
              isInvalid={errors.email ? true : false}
            />
            {errors.email?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.email.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="validationPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="****"
                aria-describedby="inputGroupAppend"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 8,
                    message: "Min length is 8",
                  },
                })}
                isInvalid={errors.password ? true : false}
              />
              <InputGroup.Text
                id="inputGroupAppend"
                as={"button"}
                type="button"
                onClick={() => setShow((prev) => !prev)}
              >
                {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
              </InputGroup.Text>
              {errors.password?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.password.message.toString()}
                </Form.Control.Feedback>
              )}
            </InputGroup>
          </Form.Group>
        </Col>
        <div className="mb-3">
          <Button type="submit" className="m-1">
            Login
          </Button>
          <Link href={"/register"} className="m-1">
            New here?
          </Link>
        </div>
      </Form>
    </Card>
  );
}
