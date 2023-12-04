"use client";

import Link from "next/link";
import { Card } from "../ui/index";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

export function RegisterIsland(func: (arg: object) => void) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Card title="Register account by SpeditIt">
      <Form onSubmit={handleSubmit((data) => func(data))}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              as={"input"}
              type="text"
              placeholder="First name"
              {...(register("firstName"), { required: true })}
              isInvalid={errors.firstName ? true : false}
            />
            {errors.firstName?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.firstName.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              {...(register("lastName"), { required: true })}
              isInvalid={errors.lastName ? true : false}
            />
            {errors.lastName?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.lastName.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCompany">
            <Form.Label>Company name</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Company name"
                aria-describedby="inputGroupPrepend"
                {...(register("companyName"), { required: true })}
                isInvalid={errors.companyName ? true : false}
              />
              {errors.companyName?.message && (
                <Form.Control.Feedback type="invalid">
                  {errors.companyName.message.toString()}
                </Form.Control.Feedback>
              )}
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="City"
              {...(register("city"), { required: true })}
              isInvalid={errors.city ? true : false}
            />
            {errors.city?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.city.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              placeholder="State"
              {...(register("state"), { required: true })}
              isInvalid={errors.state ? true : false}
            />
            {errors.state?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.state.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              {...(register("zip"), { required: true })}
              isInvalid={errors.zip ? true : false}
            />
            {errors.zip?.message && (
              <Form.Control.Feedback type="invalid">
                {errors.zip.message.toString()}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Register</Button>
          <Link href={"/login"}>Already have an account?</Link>
        </div>
      </Form>
    </Card>
  );
}
